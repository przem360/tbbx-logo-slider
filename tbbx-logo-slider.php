<?php
/*
    Plugin Name: Logo Slider
    Description: Simple marketing coops logo slider
    Author: Przemysław Wolski
    Version: 0.0.2
*/

/* update wordpress jQuery */
function modify_jquery() {
    if (!is_admin()) {
        // comment out the next two lines to load the local copy of jQuery
        wp_deregister_script('jquery');
        wp_register_script('jquery', plugins_url('js/jquery-3.2.1.min.js', __FILE__), false, '1.8.1');
        wp_enqueue_script('jquery');
    }
}
add_action('init', 'modify_jquery');

/* creating tls_images post type */
function tls_init() {
    $args = array(
        'public' => true,
        'label' => 'Associates logos',
        'supports' => array(
            'title',
            'thumbnail'
        ),
		'register_meta_box_cb' => 'tls_metaboxes'
    );
    register_post_type('tls_images', $args);
}
add_theme_support( 'post-thumbnails' );
add_action('init', 'tls_init');

/* adding custom meta box for link url */
function tls_metaboxes() {
	add_meta_box(
		'tls_url', // id
		'url', // name
		'tls_logo_url', // name of html function
		'tls_images', // name of custom post type
		'normal', // position of field: normal - in main column, side - in side panel
		'default' // priority: high, low, default
	);
}
// meta box html
function tls_logo_url() {
	global $post;
	// Nonce field to validate form request came from current site
	wp_nonce_field( basename( __FILE__ ), 'tls_logo' );
	// Get the url data if it's already been entered
	$linkurl = get_post_meta( $post->ID, 'url', true );
	// Output the field
	echo '<input type="text" name="url" value="' . esc_textarea( $linkurl )  . '" class="widefat">';
}
// save meta box data
function tls_logo_url_save( $post_id, $post ) {
	// Return if the user doesn't have edit permissions.
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return $post_id;
	}
	// Verify this came from the our screen and with proper authorization,
	// because save_post can be triggered at other times.
	if ( ! isset( $_POST['url'] ) || ! wp_verify_nonce( $_POST['tls_logo'], basename(__FILE__) ) ) {
		return $post_id;
	}
	// Now that we're authenticated, time to save the data.
	// This sanitizes the data from the field and saves it into an array $logo_url_meta.
	$logo_url_meta['url'] = esc_textarea( $_POST['url'] );
	// Cycle through the $logo_url_meta array.
	// Note, in this example we just have one item, but this is helpful if you have multiple.
	foreach ( $logo_url_meta as $key => $value ) :
		// Don't store custom data twice
		if ( 'revision' === $post->post_type ) {
			return;
		}
		if ( get_post_meta( $post_id, $key, false ) ) {
			// If the custom field already has a value, update it.
			update_post_meta( $post_id, $key, $value );
		} else {
			// If the custom field doesn't have a value, add it.
			add_post_meta( $post_id, $key, $value);
		}
		if ( ! $value ) {
			// Delete the meta key if there's no value
			delete_post_meta( $post_id, $key );
		}
	endforeach;
}
add_action( 'save_post', 'tls_logo_url_save', 1, 2 );







/* registering scripts and styles */
add_action('wp_print_scripts', 'tls_register_scripts');
add_action('wp_print_styles', 'tls_register_styles');

function tls_register_scripts() {
    if (!is_admin()) {
        // register
		wp_register_script('tls_bx', plugins_url('js/jquery.bxslider.min.js', __FILE__), array( 'jquery' ));
        wp_register_script('tls_script', plugins_url('js/tls.slider.js', __FILE__));
 
        // enqueue
        wp_enqueue_script('tls_bx');
        wp_enqueue_script('tls_script');
    }
}
 
function tls_register_styles() {
    // register
    wp_register_style('tls_bx_styles', plugins_url('css/jquery.bxslider.min.css', __FILE__));
    wp_register_style('tls_own_styles', plugins_url('css/tls.own.styles.css', __FILE__));
 
    // enqueue
    wp_enqueue_style('tls_bx_styles');
    wp_enqueue_style('tls_own_styles');
}

/* slider image sizes*/
add_image_size('tls_ticker', 180, 180, true);

/* generating html */
function tls_function($type='tls_function') {
    $args = array(
        'post_type' => 'tls_images',
        'posts_per_page' => 5
    );
    $result = '<div class="tls-slider">';
    $result .= '<ul class="bxslider">';
 
    //the loop
    $loop = new WP_Query($args);
    while ($loop->have_posts()) {
        $loop->the_post();
		$linkurl = get_post_meta( get_the_id(), 'url', true );
        $the_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), $type);
		if (!$linkurl) {
        $result .='<li><img title="'.get_the_title().'" src="' . $the_url[0] . '" data-thumb="' . $the_url[0] . '" alt=""/></li>';
		} else {
		$result .='<li><a href="'.$linkurl.'" target="_blank"><img title="'.get_the_title().'" src="' . $the_url[0] . '" data-thumb="' . $the_url[0] . '" alt=""/></a></li>';	
		}
    }
	$result .= '</ul>';
    $result .= '</div>';
    return $result;
}

/* add shortcode */
add_shortcode('tbbx-logo-slider', 'tls_function');

/* widget */
function tls_widgets_init() {
    register_widget('tls_Widget');
}
 
add_action('widgets_init', 'tls_widgets_init');

class tls_Widget extends WP_Widget {
 
    public function __construct() {
        parent::__construct('tls_Widget', 'Logo Slideshow', array('description' => __('A TBBX Logo Slideshow Widget', 'text_domain')));
    }
	
	// form for windget admin backend
public function form($instance) {
    if (isset($instance['title'])) {
        $title = $instance['title'];
    }
    else {
        $title = __('Widget Slideshow', 'text_domain');
    }
    ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
        </p>
    <?php
}

// update widget title
public function update($new_instance, $old_instance) {
    $instance = array();
    $instance['title'] = strip_tags($new_instance['title']);
 
    return $instance;
}

// widget frontend
public function widget($args, $instance) {
    extract($args);
    // the title
    $title = apply_filters('widget_title', $instance['title']);
    echo $before_widget;
    if (!empty($title))
        echo $before_title . $title . $after_title;
    echo tls_function('tls_widget');
    echo $after_widget;
}
}
?>
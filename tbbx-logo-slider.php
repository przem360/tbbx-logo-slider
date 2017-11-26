<?php
/*
    Plugin Name: Logo Slider
    Description: Simple marketing coops logo slider
    Author: Przemysław Wolski
    Version: 1.0
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
        )
    );
    register_post_type('tls_images', $args);
}
add_theme_support( 'post-thumbnails' );
add_action('init', 'tls_init');

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
 
        $the_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), $type);
        $result .='<li><img title="'.get_the_title().'" src="' . $the_url[0] . '" data-thumb="' . $the_url[0] . '" alt=""/></li>';
    }
	$result .= '</ul>';
    $result .= '</div>';
    return $result;
}

/* add shortcode */
add_shortcode('tls-shortcode', 'tls_function');

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
<?php 
add_action('admin_menu', 'plugin_admin_add_page');
function plugin_admin_add_page() {
add_options_page('TBBX Image Ticker Options', 'TBBX Image Ticker Options', 'manage_options', 'tbbxls', 'tbbxls_options_page');
}

function tbbxls_options_page() {
?>
<div>
<h2>Team BlueBox Image Ticker</h2>
Options relating to the TBBX Plugin.
<form action="options.php" method="post">
<?php settings_fields('tbbxls_options'); ?>
<?php do_settings_sections('tbbxls'); ?>
 
<input name="Submit" type="submit" value="<?php esc_attr_e('Save Changes'); ?>" />
</form></div>
 
<?php } ?>

<?php 
add_action('admin_init', 'plugin_admin_init');
function plugin_admin_init(){
register_setting( 'tbbxls_options', 'tbbxls_options', 'tbbxls_options_validate' );
add_settings_section('tbbxls_plugin_main', 'Main Settings', 'plugin_section_text', 'tbbxls');
add_settings_field('tbbxls_plugin_text_string', 'Items in row:', 'tbbxls_plugin_setting_string', 'tbbxls', 'tbbxls_plugin_main');
}
function plugin_section_text() {
echo '<p>Set slider parameters.</p>';
}
function tbbxls_plugin_setting_string() {
$options = get_option('tbbxls_options');
echo '<input id="tbbxls_items_counter" name="tbbxls_options[items_counter]" size="40" type="text" value="' . ( isset( $options['items_counter'] ) ? esc_attr( $options['items_counter'] ) : '' ) . '" />';
} 
function plugin_options_validate($input) {
$options = get_option('tbbxls_options');
$options['items_counter'] = trim($input['items_counter']);
if(!preg_match('/^[a-z0-9]{32}$/i', $options['items_counter'])) {
$options['items_counter'] = '';
}
return $options;
}
?>
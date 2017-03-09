  jQuery(document).ready(function(){
                jQuery("#gallery").unitegallery({
                gallery_theme: "tiles",
                tiles_type: "coloumns",
                gallery_width: "100%",
                gallery_background_color: "rgba(255, 255, 255, 0)",
                tiles_set_initial_height: 263,
                tiles_space_between_cols:25,
                tiles_justified_space_between:25,
                tiles_col_width:220,
                tile_enable_shadow:true,	 //enable shadow of the tile
                tile_shadow_h:1,			 //position of horizontal shadow
                tile_shadow_v:1,			 //position of vertical shadow
                tile_shadow_blur:3,			 //shadow blur
                tile_shadow_spread:1,		 //shadow spread
                tile_shadow_color:"rgba(26, 26, 26, 0.19)"
                });
                });
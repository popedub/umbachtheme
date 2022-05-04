<footer id="footer" class="content-info h-auto">
    @if (!is_404() && !is_single())
        @if (has_nav_menu('primary_navigation'))
            <nav class="nav-primary
            @if (!is_front_page()) hidden lg:block @endif
            "
                aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
                {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
            </nav>
        @endif
    @endif
    @if (is_page_template(['template-classes.blade.php', 'template-verkauf.blade.php']))

        @if (has_nav_menu('ceramics_navigation'))
            <nav id="fake-ceramica" class="nav-secundary block lg:hidden border-t-2 border-black"
                aria-label="{{ wp_get_nav_menu_name('ceramics_navigation') }}">
                {!! wp_nav_menu(['theme_location' => 'ceramics_navigation', 'menu_class' => 'nav-ceramics', 'echo' => false]) !!}
            </nav>
        @endif
    @endif

    @if (!is_single())
        <div class="pt-40 lg:pt-60">
            @php(dynamic_sidebar('sidebar-footer'))
        </div>
    @endif

</footer>

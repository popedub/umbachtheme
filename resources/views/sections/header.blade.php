<header id="header" class="banner border-b-2 border-black lg:border-transparent pb-2 lg:pb-0">
    <div class="flex items-center justify-between lg:grid extra-ti
                lg:grid-cols-3
                lg:px-5
                @if(!is_single())
                 md:py-[15px]
                @endif
               ">
        <a class="brand pl-3 pt-2 lg:pl-0 lg:pt-0" href="{{ home_url('/') }}">
            {!! $siteName !!}
        </a>
        <div class="hidden lg:block">
        @if (!is_404())
            @include('partials.page-header')
        @endif
        </div>

          {{-- solo para el phone y la tablet --}}
        @if (has_nav_menu('primary_navigation'))
        <div id="menu-phone" class="lg:hidden -translate-x-full absolute z-10 w-full bg-white overflow-y-scroll h-full">

          <nav  class="nav-primary border-b-2 border-black mb-10" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
            {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav-phone', 'echo' => false]) !!}

          <div class="idiomas text-center pt-5">
            {{ do_action('wpml_add_language_selector') }}
          </div>
          @if (has_nav_menu('footer_navigation'))
              <nav class="footer-nav-phone" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
                  {!! wp_nav_menu(['theme_location' => 'footer_navigation', 'menu_class' => 'nav-footer-phone text-center text-tel-texto pt-10 pb-3', 'echo' => false]) !!}
              </nav>
          @endif
          </nav>


        </div>



        @endif
        @if (!is_single())
            <div class="idiomas text-right hidden lg:block">

                {{ do_action('wpml_add_language_selector') }}
            </div>
            <div id="btn-menu-phone" class="absolute right-3 top-3 lg:hidden w-11 h-7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36">
                <g fill="#000" fill-rule="evenodd">
                  <path d="M11.667 3H60v3.222H11.667z"/>
                  <path d="M11.667 15.889H60v3.222H11.667z"/>
                  <path d="M11.667 28.778H60V32H11.667z"/>
                </g>
              </svg>

            </div>
            <div id="close-menu" class="absolute right-3 top-3 lg:hidden w-8 h-8 hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30">
                <g fill="none" fill-rule="evenodd" stroke-linecap="square" stroke="#000" stroke-width="3">
                  <path d="M4 26 27 3"/>
                  <path d="m4 3 23 23"/>
                </g>
              </svg>
            </div>
        @else
            <a href="{{ get_category_link(2) }}" class="">
              <div class="w-8 h-8 mt-3 mr-3 lg:mt-1 lg:-mr-1 lg:w-10 lg:h-10 float-right">
                <?php
                    $image = get_svg('images.cross');
                  ?>
                {{ $image }}
              </div>


            </a>
        @endif

    </div>
</header>


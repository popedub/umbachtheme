@extends('layouts.app')

@section('content')


    @if (!have_posts())
        <x-alert type="warning">
            {!! __('Sorry, no results were found.', 'sage') !!}
        </x-alert>

        {!! get_search_form(false) !!}
    @endif
    @if (is_category(array('ceramics', 'ceramics-en')))
        {{-- este menu es para el desktop --}}
        @if (has_nav_menu('ceramics_navigation'))
            <nav class="nav-secundary hidden lg:block" aria-label="{{ wp_get_nav_menu_name('ceramics_navigation') }}">
                {!! wp_nav_menu(['theme_location' => 'ceramics_navigation', 'menu_class' => 'nav-ceramics', 'echo' => false]) !!}
            </nav>
        @endif
        {{-- page header tel y tablet --}}
      <div class="block lg:hidden">
        @include('partials.page-header')
      </div>
        <div id="gallery-ceramics" class="swiper lg:border-t-2 border-black h-[364px] lg:h-auto">
            <div class="swiper-wrapper">
                @while (have_posts())
                    @php(the_post())

                    @include('partials.category-ceramics')
                @endwhile
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination hidden lg:block"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
                {{-- este menu es para el tel y la tablet --}}
        @if (has_nav_menu('ceramics_navigation'))
            <nav class="nav-secundary block lg:hidden border-t-2 border-black" aria-label="{{ wp_get_nav_menu_name('ceramics_navigation') }}">
                {!! wp_nav_menu(['theme_location' => 'ceramics_navigation', 'menu_class' => 'nav-ceramics', 'echo' => false]) !!}
            </nav>
        @endif
    @else
    <div class="block lg:hidden">
      @include('partials.page-header')
    </div>
      <div class="flex flex-col lg:block">
        @while (have_posts())
            @php(the_post())
            @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
        @endwhile
      </div>
        {!! get_the_posts_navigation() !!}
    @endif

@endsection

@section('sidebar')
    @include('sections.sidebar')
@endsection

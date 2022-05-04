{{--
  Template Name: Classes Template
 --}}

@extends('layouts.app')

@section('content')
    <div class="block lg:hidden">
      @include('partials.page-header')
    </div>
    @if (has_nav_menu('ceramics_navigation'))
        <nav class="nav-secundary" aria-label="{{ wp_get_nav_menu_name('ceramics_navigation') }}">
            {!! wp_nav_menu(['theme_location' => 'ceramics_navigation', 'menu_class' => 'nav-ceramics', 'echo' => false]) !!}
        </nav>

    @endif
    @while (have_posts())
        @php(the_post())

        @include('partials.content-page-classes')
    @endwhile
@endsection

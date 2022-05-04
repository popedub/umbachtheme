@extends('layouts.app')

@section('content')
    @include('partials.page-header')

    @if (!have_posts())
        <x-alert type="warning">
            {!! __('Sorry, no results were found.', 'sage') !!}
        </x-alert>

        {!! get_search_form(false) !!}
    @endif

    @while (have_posts())
        @php(the_post())
        @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
    @endwhile
    {{-- featured fotos de la home --}}
    @hasfields('photos')
    <?php $dd = get_field('photos');  $i = 0; ?>

    @fields('photos')
    <?php $post = get_sub_field('photo'); ?>
    <a href="@permalink($post->ID)" class="absolute featured hidden lg:block foto-home-{{ $i }} ">
        <img src="@thumbnail($post->ID, 'home', false)" alt="" class="">
    </a>
    <?php $i++; ?>
    @endfields

    @endhasfields

    {{-- fin featured --}}



    {!! get_the_posts_navigation() !!}
@endsection

@section('sidebar')
    @include('sections.sidebar')
@endsection

{{--
  Template Name: Info Template
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    <div class="lg:flex lg:border-t-2 lg:border-black lg:min-h-screen">
      <div class="lg:w-1/2 lg:border-r-2 lg:border-black">
        @hasfield('info_left')
        <div class="content px-5 pt-5">
          @field('info_left')
        </div>
        @endfield
          @isfield('side', 'left')
            @hasfield('foto')
              <img src="@field('foto', 'url')" alt="" class="">
            @endfield
          @endfield

      </div>
      <div class="lg:w-1/2">
        @isfield('side', 'right')
          @hasfield('foto')
            <img src="@field('foto', 'url')" alt="" class="">
          @endfield
        @endfield
        @hasfield('info_r')
        <div class="content px-5 pt-5">
          @field('info_r')
        </div>
        @endfield
      </div>
    </div>
  @endwhile
@endsection

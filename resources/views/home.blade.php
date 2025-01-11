@extends('layouts.app')

@section('title', 'Accueil')

@section('content')
    @include('sections.hero')
    @include('sections.services')
    @include('sections.whyChooseUs')
    @include('sections.team')
    @include('sections.infiniteCarousel')
    @include('sections.contact')

@endsection

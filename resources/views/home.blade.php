@extends('layouts.app')

@section('title', 'Accueil')

@section('content')
    @include('sections.hero')
    @include('sections.services')
    @include('sections.whyChooseUs')

@endsection

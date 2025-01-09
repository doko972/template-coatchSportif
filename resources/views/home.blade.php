@extends('layouts.app')

@section('title', 'Accueil')

@section('content')
    @include('sections.hero')
    @include('sections.team')
    @include('sections.services')

@endsection

from django.shortcuts import render
from .models import User, Club
from .serializer import UserSerializer, ClubSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
# Create your views here.

# create get club
@api_view(['GET'])
def get_club(request):
    club = Club.objects.all()
    serializer = ClubSerializer(club, many=True)
    return Response(serializer.data)

# create post club
@api_view(['POST'])
def create_club(request):
    serializer = ClubSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def club_details(request, pk):
    try:
        club = Club.objects.get(pk=pk)
    except Club.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ClubSerializer(club)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ClubSerializer(club, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        club.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

# create get user
@api_view(['GET'])
def get_user(request):
   users = User.objects.all()
   serializer = UserSerializer(users, many=True)
   return Response(serializer.data)

@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def user_details(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

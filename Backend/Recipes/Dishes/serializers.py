from rest_framework import serializers
from .models import Dishes


class CategoriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dishes
        fields = ('categoryType',)


class DishesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dishes
        fields = ('id', 'name', 'categoryType')


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dishes
        fields = ('id', 'name', 'categoryType', 'recipe')
from django.db import models

class Dishes(models.Model):

    CATEGORY_CHOICES = (
        ('Salads', 'Salads'),
        ('Main course', 'Main course'),
        ('Second course', 'Second course'),
        ('Desserts', 'Desserts'),
    )
    categoryType = models.CharField(max_length=20, choices=CATEGORY_CHOICES, verbose_name='Category')
    name = models.CharField(max_length=256, verbose_name='Name')
    recipe = models.TextField(verbose_name='Recipe')

    def __str__(self):
        return f'{self.name} | {self.categoryType}'

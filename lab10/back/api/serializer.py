from rest_framework import serializers
from . import models


class _VacancySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Vacancy
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
    vacancy = _VacancySerializer(read_only=True, many=True)

    class Meta:
        model = models.Company
        fields = '__all__'


class VacancySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Vacancy
        fields = '__all__'

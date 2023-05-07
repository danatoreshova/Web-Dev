# Generated by Django 4.1.7 on 2023-05-02 14:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_song_audio_alter_song_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='song', to='main.category', verbose_name='Categories'),
        ),
    ]

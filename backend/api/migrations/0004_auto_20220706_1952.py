# Generated by Django 3.2 on 2022-07-06 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_project_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='giturl',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='project',
            name='liveurl',
            field=models.TextField(null=True),
        ),
    ]

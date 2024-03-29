from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from src import settings
from main import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Tynda App API",
      default_version='v1',
      contact=openapi.Contact(email="dim03kz3@gmail.com"),
   ),
   public=True,
)

urlpatterns = [
    # path('', views.MainPage),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/', include('src.api_urls')),
    path('__debug__/', include('debug_toolbar.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

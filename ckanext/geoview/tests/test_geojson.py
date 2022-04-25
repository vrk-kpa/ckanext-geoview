from json import tool
import pytest 

from ckan.tests import factories
from ckan.plugins import toolkit

from ckanext.geoview.plugin import GeoJSONView

@pytest.mark.usefixtures("with_plugins")
@pytest.mark.ckan_config('ckan.views.default_views', 'geojson_view')
def test_geojson_view_is_rendered(app):
    view_default_title = GeoJSONView().info()["title"]
    dataset = factories.Dataset()

    for format in GeoJSONView.GeoJSON:
        geojson = factories.Resource(
            name='My Resource',
            format=format,
            package_id=dataset['id']
        )

        url = toolkit.url_for("resource_read", id=geojson["package_id"], resource_id=geojson["id"])
        res = app.get(url)
        assert 'class="resource-view"' in res.get_data(as_text=True)
        assert 'data-title="{}"'.format(view_default_title) in res.get_data(as_text=True)
        assert 'id="view-' in res.get_data(as_text=True)

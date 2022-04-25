import pytest 

from ckan.tests import factories
from ckan.plugins import toolkit

from ckanext.geoview.plugin import SHPView

@pytest.mark.ckan_config('ckan.views.default_views', 'shp_view')
def test_geojson_view_is_rendered(app):
    view_default_title = SHPView().info()["title"]
    dataset = factories.Dataset()

    for format in SHPView.SHP:
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

import pytest

from ckanext.geoview import plugin

@pytest.mark.usefixtures("with_plugins")
def test_plugin():
    """This is here just as a sanity test
    """
    p = plugin.OLGeoView()
    assert p
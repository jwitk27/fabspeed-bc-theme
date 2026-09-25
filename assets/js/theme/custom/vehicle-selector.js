import { addClass } from "nod-validate";

export default function() {
    if (!$('.fs-vehicle-selector').length) return;

    const makeSelector = $('#make');
    const modelSelector = $('#model');
    const trimSelector = $('#submodel');
    const vehicleButton = $('.fs-vehicle-button');

    makeSelector.on('change', e => {
        const make = $(e.currentTarget).val().trim();
        const makeUrl = $(e.currentTarget).find('option:selected').data('url').trim();
        modelSelector.find('option:eq(0)').prop('selected', true);
        trimSelector.find('option:eq(0)').prop('selected', true);
        setUrl(makeUrl);
        if (make !== '') {
            modelSelector.find('option').each((i, el) => {
                displayOptions(el, 'make', make);
            });
            modelSelector.removeAttr('disabled')
        } else {
            vehicleButton.attr('href', 'javascript:void(0)');
            modelSelector.attr('disabled', true);
            trimSelector.attr('disabled', true);
        }
    });

    modelSelector.on('change', e => {
        trimSelector.find('option:eq(0)').prop('selected', true);
        const model = $(e.currentTarget).val().trim();
        const modelUrl = $(e.currentTarget).find('option:selected').data('url').trim();
        setUrl(modelUrl);
        if ($(e.currentTarget).find('option:selected').data('has-children')) {
            trimSelector.find('option').each((i, el) => {
                displayOptions(el, 'model', model);
            });
            trimSelector.removeAttr('disabled');
        } else {
            trimSelector.attr('disabled', true);
        }
    });

    trimSelector.on('change', e => {
        const trimUrl = $(e.currentTarget).find('option:selected').data('url').trim();
        setUrl(trimUrl);
    });

    function setUrl(url) {
        vehicleButton.attr('href', url);
    }

    function displayOptions(el, scope, value) {
        if ($(el).data(`${scope}`) === value) {
            $(el).removeClass('hidden');
        } else {
            $(el).addClass('hidden');
        }
    }

    makeSelector.find('option:eq(1)').prop('selected', true);
    modelSelector.find('option').each((i, el) => {
        displayOptions(el, 'make', 'Porsche');
    });
}
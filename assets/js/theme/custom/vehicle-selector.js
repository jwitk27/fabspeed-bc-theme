import { addClass } from "nod-validate";

export default function() {
    if (!$('.fs-vehicle-selector').length) return;

    const makeSelector = $('#make');
    const modelSelector = $('#model');
    const trimSelector = $('#submodel');
    const vehicleButton = $('.fs-vehicle-button');

    makeSelector.on('change', e => {
        console.log('changing');
        disableButton();
        const make = $(e.currentTarget).val().trim();
        modelSelector.find('option:eq(0)').prop('selected', true);
        trimSelector.find('option:eq(0)').prop('selected', true);
        if (make !== '') {
            modelSelector.find('option').each((i, el) => {
                displayOptions(el, 'make', make);
            });
            modelSelector.removeAttr('disabled');
            trimSelector.attr('disabled', 'true');
        } else {
            modelSelector.attr('disabled', 'true');
            trimSelector.attr('disabled', 'true');
        }
    });

    modelSelector.on('change', e => {
        console.log('changing');
        trimSelector.find('option:eq(0)').prop('selected', true);
        const model = $(e.currentTarget).val().trim();
        const modelUrl = $(e.currentTarget).find('option:selected').data('url').trim();
        setUrl(modelUrl);
        if (model !== '') {
            trimSelector.find('option').each((i, el) => {
                displayOptions(el, 'model', model);
            });
            trimSelector.removeAttr('disabled');
        } else {
            trimSelector.attr('disabled', 'true');
        }
    });

    trimSelector.on('change', e => {
        console.log('changing');
        const trimUrl = $(e.currentTarget).find('option:selected').data('url').trim();
        setUrl(trimUrl);
    });

    function enableButton(url) {
        vehicleButton.attr('href', url);
        vehicleButton.removeClass('disabled');
    }

    function disableButton() {
        vehicleButton.attr('href', 'javascript:void(0);');
        vehicleButton.addClass('disabled');
    }

    function setUrl(url) {
        if (url !== '') {
            enableButton(url);
        } else {
            disableButton();
        }
    }

    function displayOptions(el, scope, value) {
        if ($(el).data(`${scope}`) === value) {
            $(el).removeClass('hidden');
        } else {
            $(el).addClass('hidden');
        }
    }
}
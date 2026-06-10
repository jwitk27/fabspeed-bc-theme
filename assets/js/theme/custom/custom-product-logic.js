export default function() {
    if (!$('.productView').length) return;
    
    if ($('.productView').data('product-id') === 6472) {
        $('#attribute_select_392531').on('change', e => {
            const selectedOption = $('#attribute_select_392531 :selected').text().toLowerCase();
            if (selectedOption !== 'yes') {
                $('#attribute_select_392532').closest('.form-field').hide();
                $('#attribute_select_392532 option:eq(2)').prop('selected', true);
            } else {
                $('#attribute_select_392532').closest('.form-field').show();
            }
        })
    }
}
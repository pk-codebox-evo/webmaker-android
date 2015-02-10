var i18n = require('../../lib/i18n');

module.exports = {
    className: 'app-cell',
    ready: function () {
        this.constructedURL = '/make/' + this['app-id'] + '/detail/';
    },
    methods: {
        onClick: function () {
            this.$root.$data.enteredEditorFrom = '/profile';
        }
    },
    data: {
        constructedURL: ''
    },
    paramAttributes: ['app-id'],
    template: require('./index.html'),
    computed: {
        guestKey: function () {
            return i18n.get('Guest');
        }
    }
};

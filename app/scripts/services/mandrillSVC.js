angular.module('talkreserveApp')
.factory('mandrill', function() {
    return {
        initMandrill: function() {
            return new mandrill.Mandrill('or4_xbc_JBOIXvkqAXIk9A', true);
        }
    };
});

    
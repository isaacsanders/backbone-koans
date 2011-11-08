(function() {
    window.Tooter = {};
    
    Tooter.Toot = Backbone.Model.extend({
        defaults: function() {
            return {
                user: 'Mario',
                message: 'Squishing Goombas, collecting coins.',
                created_on: new Date()
            };
        },
        
        initialize: function() {
            // Capitalize the user's name associated with this Toot.
            var userName = this.get('user');
            userName = userName.slice(0,1).toUpperCase() + userName.slice(1).toLowerCase();
            
            this.set({ user: userName }, { silent: true });
        },
        
        validate: function(attrs) {
            if (_.isString(attrs.user) && attrs.user.length === 0) {
                return 'Must have a user.';
            }
            
            if (_.isString(attrs.message) && attrs.message.length === 0) {
                return 'Must contain a message.';
            }
        }
    });
    
    Tooter.Toots = Backbone.Collection.extend({
        model: Tooter.Toot
    });
})();
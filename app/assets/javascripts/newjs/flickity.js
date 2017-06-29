Vue.component('flickity', {
	template: '<div><slot></slot></div>',
	props: {
		options: {
			type: Object,

			default: function ( ) {
				return { };
			},
		}
	},
	mounted: function ( ) {
		this.flickity = new Flickity( this.$el, this.options );
	},

	beforeDestroy: function ( ) {
		this.flickity.destroy( );
		this.flickity = null;
	},

	methods: {
		next: function ( isWrapped, isInstant ) {
			this.flickity.next( isWrapped, isInstant );
		},

		previous: function ( isWrapped, isInstant ) {
			this.flickity.previous( isWrapped, isInstant );
		},

		select: function ( index, isWrapped, isInstant ) {
			this.flickity.select( index, isWrapped, isInstant );
		},

		selectCell: function ( value, isWrapped, isInstant ) {
			this.flickity.selectCell( value, isWrapped, isInstant );
		},

		resize: function ( ) {
			this.flickity.resize( );
		},

		reposition: function ( ) {
			this.flickity.reposition( );
		},

		prepend: function ( elements ) {
			this.flickity.prepend( elements );
		},

		append: function ( elements ) {
			this.flickity.append( elements );
		},

		insert: function ( elements, index ) {
			this.flickity.insert( elements, index );
		},

		remove: function ( elements ) {
			this.flickity.remove( elements );
		},

		playPlayer: function ( ) {
			this.flickity.playPlayer( );
		},

		stopPlayer: function ( ) {
			this.flickity.stopPlayer( );
		},

		pausePlayer: function ( ) {
			this.flickity.pausePlayer( );
		},

		unpausePlayer: function ( ) {
			this.flickity.unpausePlayer( );
		},

		destroy: function ( ) {
			this.flickity.destroy( );
		},

		reloadCells: function ( ) {
			this.flickity.reloadCells( );
		},

		getCellElements: function ( ) {
			this.flickity.getCellElements( );
		},

		data: function ( ) {
			return Flickity.data( this.$el );
		},

		on: function ( eventName, listener ) {
			this.flickity.on( eventName, listener );
		},

		off: function ( eventName, listener ) {
			this.flickity.off( eventName, listener );
		},

		once: function ( eventName, listener ) {
			this.flickity.once( eventName, listener );
		},
	}
});

import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
	multiple: true,
	// url: '/files', // passed as parameter on tag. Eg. /image

	attributeBindings: [
    'model', 'property'
	],

  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: this.get('url'),
      paramName: 'files' // By default parameter will be file
    });

    if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files/*, { whateverObject }*/).then(data => {
		  	// Array of file ids
		  	
		  	const model = this.get('model');
		  	const property = this.get('property');
		  	
      	console.log(data);
		  	console.log(model);
		  	console.log(property);

		  	// If property is not initialized
		  	if (!model.get(property)) {
		  		model.set(property, Ember.A());
		  	}


		  	model.get(property).pushObjects(data);
			}, error => {
			  console.log(error);
			});
    }

    uploader.on('progress', e => {
		  // Handle progress changes
		  // Use `e.percent` to get percentage
		  this.sendAction('progress', e.percent);
		  console.log('uploading ' + e.percent);
		});

		uploader.on('didUpload', e => {
		  console.log('uploaded!' + e);
		});

		uploader.on('didError', (jqXHR, textStatus, errorThrown) => {
		  console.log('Error uploading file!');
		  console.log(errorThrown);
		});
  }
});

import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
	multiple: true,
	// url: '/files', // passed as parameter on tag. Eg. /image

  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: this.get('url'),
      paramName: 'files' // By default parameter will be file
    });

    if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload
      const fileId = uploader.upload(files/*, { whateverObject }*/).then(data => {
		  // Handle success
      	console.log(data);
			}, error => {
			  console.log(error);
			});
    }

    uploader.on('progress', e => {
		  // Handle progress changes
		  // Use `e.percent` to get percentage
		  console.log('uploading ' + e.percent);
		});

		uploader.on('didUpload', e => {
		  console.log('uploaded!');
		});

		uploader.on('didError', (jqXHR, textStatus, errorThrown) => {
		  console.log('Error uploading file!');
		  console.log(errorThrown);
		});
  }
});

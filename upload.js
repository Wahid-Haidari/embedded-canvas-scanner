
class UploadWindow extends HTMLElement {
	constructor(){
		super();
	}

	connectedCallback(){

  	this.innerHTML = `
  	<style>
  
  	</style>
  	<div>
		<p1>Upload the scanned document</p1>
	</div>
  	`;
  }
}

customElements.define('upload-window' , UploadWindow);
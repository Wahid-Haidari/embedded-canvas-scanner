class CourseMenu extends HTMLElement {
	constructor(){
		super();
	}

	connectedCallback(){
  	this.innerHTML = `
  	<style>
  		#course-menu{
			padding: 1em;
			color:#993333 ;
		}

		#assignmentOption{
			color: black;
		}
  	</style>
  	<div id="course-menu">
		<p>Home</p>
		<p>Announcements</p>
		<p id="assignmentOption"><a href="index.html">Assignments</a></p>
		<p>Discussions</p>
		<p>Grades</p>
		<p>People</p>
		<p>Pages</p>
		<p>Files</p>
		<p>Syllabus</p>
		<p>BigBlueButton</p>
		<p>Collaborations</p>
		<p>New Analytics</p>
		<p>TopHat LTI 1.3</p>
		<p>Scanner</p>
	</div>
  	`;
  }
}

customElements.define('course-menu' , CourseMenu);
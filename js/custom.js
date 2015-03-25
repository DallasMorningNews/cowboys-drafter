$(document).ready(function() {


	//our pool of players to pick from
	var playerPool=[{"id":"jameiswinston","firstname":"Jameis","lastname":"Winston","position":"qb","round":1,"school":"Florida State","height":"6'3\"","weight":231,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"},{"id":"marcusmariota","firstname":"Marcus","lastname":"Mariota","position":"qb","round":1,"school":"Oregon","height":"6'3\"","weight":222,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.cnn.com"},{"id":"quarterbackthree","firstname":"Quarterback","lastname":"Three","position":"qb","round":1,"school":"Texas","height":"6'2\"","weight":225,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.utexas.edu"},{"id":"amaricooper","firstname":"Amari","lastname":"Cooper","position":"wr","round":2,"school":"Alabma","height":"6'0\"","weight":211,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"id":"kevinwhite","firstname":"Kevin","lastname":"White","position":"wr","round":2,"school":"West Virginia","height":"6'2\"","weight":215,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"},{"id":"devanteparker","firstname":"DeVante","lastname":"Parker","position":"wr","round":2,"school":"Louisville","height":"6'2\"","weight":209,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"id":"leonardwilliams","firstname":"Leonard","lastname":"Williams","position":"de","round":2,"school":"USC","height":"6'4\"","weight":302,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"id":"arikarmstead","firstname":"Arik","lastname":"Armstead","position":"de","round":2,"school":"Nebraska","height":"6'7\"","weight":292,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"},{"id":"dantefowler","firstname":"Dante","lastname":"Fowler Jr.","position":"de","round":2,"school":"Florida State","height":"6'2\"","weight":261,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"id":"brandonscherff","firstname":"Brandon","lastname":"Scherff","position":"ol","round":2,"school":"Iowa","height":"6'4\"","weight":319,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"id":"andruspeat","firstname":"Andrus","lastname":"Peat","position":"ol","round":2,"school":"Stanford","height":"6'6\"","weight":313,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"id":"cameronerving","firstname":"Cameron","lastname":"Erving","position":"ol","round":2,"school":"Florida State","height":"6'5\"","weight":313,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"},{"id":"shaneray","firstname":"Shane","lastname":"Ray","position":"lb","round":3,"school":"Missouri","height":"6'2\"","weight":245,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"id":"vicbeasley","firstname":"Vic","lastname":"Beasley","position":"lb","round":3,"school":"Clemson","height":"6'3\"","weight":246,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"id":"eliharold","firstname":"Eli","lastname":"Harold","position":"lb","round":3,"school":"Virginia","height":"6'3\"","weight":247,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"}]
	
})
import { projectsData } from "./data/ProjectsData.js";

const createProjectHTML = (listOfProjects) => {
  let html = "";
  listOfProjects.forEach(({name, description, techs, link, preview}, i) => {
    let techList = "";
    techs.forEach(({name, image}) => {
      techList += `
        <div class='flex_row projects_tech_list_container'>
          <p class='projects_tech subtitle'>${name}</p>
          <image class='icon' src='${image}' alt='icon'></image>
        </div>
      `;
    });
    html += `
      <div class='flex_column'>
        <a class='link' href='${link}' target='_blank'>
          <h1 class='title link glitch_header' title='${name}'>${name}</h1>
        </a>
        <image class='project_preview round_corner' src='${preview}' alt='preview'></image>
        <div class='flex_row project_techL_list'>${techList}</div>
        <div class='paragraph projects_description'>${description}</div>
        ${projectsData.length - 1 === i ? `` : `${randomDivider()}`}
      </div>
    `;
  });
  return html;
};

const projects = () => {
  // instantiate html for project details
  const personalWebsiteList = createProjectHTML(projectsData);
  // create html
  return `
    <div class='flex_column project_container'>
      ${personalWebsiteList}
    </div>
  `;
};

export default projects;

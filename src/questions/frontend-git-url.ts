module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: 'π¦  εη«―δ»εΊε°ε',
  name: 'frontendGitUrl',
  default: projectInfos.repositoryUrl,
})

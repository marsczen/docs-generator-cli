<h1 align="center">ð  é¡¹ç®ææ¡£ - <%= projectName %> </h1>

## ð¤ ç¸å³äººå
<% if (productManager) { -%>
* äº§åï¼<%= productManager %>
<% } -%>
<% if (designer) { -%>
* è®¾è®¡å¸ï¼<%= designer %>
<% } -%>
<% if (frontendEngineer) { -%>
* åç«¯ï¼<%= frontendEngineer %>
<% } -%>
<% if (backendEngineer) { -%>
* åç«¯ï¼<%= backendEngineer %>
<% } -%>
<% if (tester) { -%>
* æµè¯ï¼<%= tester %>
<% } -%>
<% if (thirdPartyTeam) { -%>
* ä¸ä¸æ¸¸å³èï¼<%= thirdPartyTeam %>
<% } -%>


## ð¡ ææ¯éå
<% if (developmentLib) { -%>
* ææ¯æ ï¼<%= developmentLib %>
<% } -%>
<% if (buildTarget) { -%>
* æå»ºç®æ ï¼<%= buildTarget %>
<% } -%>


## ð è®¿é®ç¯å¢
<% if (terminalEquipment) { -%>
* ç»ç«¯ï¼<%= terminalEquipment %>
<% } -%>
<% if (miniappPath || webUrl) { -%>
* è®¿é®å¥å£
<% } -%>
<% if (miniappPath) { -%>
    - å°ç¨åºè·¯å¾ï¼<%= miniappPath %>
<% } -%>
<% if (webUrl) { -%>
    - webå°åï¼<%= webUrl %>
<% } -%>


  
## ð ç¸å³ææ¡£å°å

<% if (prd) { -%>
* éæ±ææ¡£
    - [<%= projectName %>](<%= prd %>)
<% } -%>

<% if (frontendGitUrl) { -%>
* [åç«¯ä»åº](<%= frontendGitUrl %>)
<% } -%>
<% if (yapiUrl) { -%>
* [YAPI mockæ¥å£ææ¡£](<%= yapiUrl %>)
<% } -%>
<% if (swagger || backendGitUrl || backendProjectDoc) { -%>
* æå¡ç«¯ç¸å³
    - [æ¥å£ææ¡£](<%= swagger %>)
    - [åç«¯ä»åº](<%= backendGitUrl %>)
    - [æå¡ç«¯ææ¯æ¹æ¡](<%= backendProjectDoc %>)
<% } -%>

## â­ï¸ ä¸»æµç¨ç®å½

<% if (prdSplit) { -%>
* éæ±æåï¼<%= prdSplit %>
<% } -%>
<% if (nonfunctionalRequirements) { -%>
* éåè½éæ±(åç¹ï¼æ¸ éç ç­)ï¼<%= nonfunctionalRequirements %>
<% } -%>
<% if (resourceNeeds) { -%>
* èµæºéæ±ï¼<%= resourceNeeds %>
<% } -%>


## â­ï¸ æµè¯æ¹æ¡

<% if (influence) { -%>
* å½±åèå´ï¼<%= influence %>
<% } -%>

<% if (notice) { -%>
* æ³¨æäºé¡¹ï¼ä¸äºç¹å«éè¦æ³¨æçæåµæé»è¾çè¯´æï¼<%= notice %>
<% } -%>
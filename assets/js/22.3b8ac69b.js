(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{395:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"creating-inhibitors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-inhibitors"}},[t._v("#")]),t._v(" Creating Inhibitors!")]),t._v(" "),n("p",[t._v("Woah! You are almost half way done with understanding all of Discordeno. Amazing isn't it? Something you may have noticed in the last section was there were some options that prevented some commands from running like "),n("code",[t._v("dmOnly")]),t._v(" or the permission options. We created a setting to prevent the monitor from running in certain channels. What if we wanted to do prevent commands from happening? How would we prevent commands from running?")]),t._v(" "),n("h2",{attrs:{id:"what-is-an-inhibitor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-inhibitor"}},[t._v("#")]),t._v(" What is an Inhibitor?")]),t._v(" "),n("p",[t._v("Inhibitors are very similar to how monitors work. A monitor runs on every message but an inhibitor runs on every command. Remember all those command options like cooldown, permissions, permissionLevel, nsfw, etc... each and every one of these options has an inhibitor that checks commands for these settings.")]),t._v(" "),n("p",[t._v("Let's create our own inhibitor that would prevent commands from being used if the user is not a VIP user.")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note:")]),t._v(" It is important to remember that everything below can be done with a simple permission level as well. We will create our own custom permission levels but for the purposes of this guide and to be able to learn about Inhibitors, we will be using an inhibitor.")])]),t._v(" "),n("h2",{attrs:{id:"creating-the-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-file"}},[t._v("#")]),t._v(" Creating the File")]),t._v(" "),n("p",[t._v("Let's start by creating a file inside the inhibitors folder called "),n("code",[t._v("boosted.ts")]),t._v(" and paste the following snippet of code:")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" botCache "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../deps.ts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbotCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inhibitors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inhibitorname"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guild"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your code goes here")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Inhibitors can take up to 3 arguments.")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("message")]),t._v(": The message object that triggered the command.")]),t._v(" "),n("li",[n("code",[t._v("command")]),t._v(": The command object itself that was triggered.")]),t._v(" "),n("li",[n("code",[t._v("guild")]),t._v(": The server guild object where this command was ran.")])]),t._v(" "),n("h2",{attrs:{id:"understanding-how-inhibitors-function"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#understanding-how-inhibitors-function"}},[t._v("#")]),t._v(" Understanding How Inhibitors Function")]),t._v(" "),n("p",[t._v("To block a command you have to return a truthy value.")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("return true;")]),t._v(" If you return true the inhibitor will block the execution of the command.\nTo allow a command return a falsey value.")]),t._v(" "),n("li",[n("strong",[t._v("return false;")]),t._v(" If you return false the inhibitor will not block the error.")])]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the command is not VIP only we can allow this command to execute")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vipOnly"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The bot's support server")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" guild "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guilds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("supportServerID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the command author is not in the server they won't have the vip role")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" member "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("member "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMember")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guild"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Member doesn't exist so cancel the command")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("member"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmessage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("Sorry, but you can not use this command until you become VIP. **Close the IRIS!!!**")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the user has the vip role on the support server given by patreon allow the command")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("member"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guilds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guildID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("roles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("roleIDs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("patreonVIPRoleID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alert the user they don't have vip and can't use the command")]),t._v("\nmessage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("Sorry, but you can not use this command until you become a VIP. I'm sorry, Teal'c. We'll go to Disneyland next year. I promise.")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Cancel the command since the user does not have vip")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"updating-command-typings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#updating-command-typings"}},[t._v("#")]),t._v(" Updating Command Typings")]),t._v(" "),n("p",[t._v("Since we need a new option on our commands we need to add that. Open the "),n("code",[t._v("src/types/commands.ts")]),t._v(" file and add in the following")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[t._v("vipOnly"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Once that is added, you can go into any command and mark them as vip only commands.")]),t._v(" "),n("h2",{attrs:{id:"challenges"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[t._v("#")]),t._v(" Challenges")]),t._v(" "),n("p",[t._v("Hell yes! We just got through the entire inhibitor section. You have now mastered everything related to inhibitors.")]),t._v(" "),n("p",[t._v("You can now try and get a little more practice with inhibitors by trying to challenge yourself and make your own inhibitors. Don't worry if you can't think of any good use cases for inhibitors.")]),t._v(" "),n("p",[t._v("Majority of Discordeno bots do not use many custom inhibitors because most of the necessary/important ones already come built for you in the inhibitors folder.")]),t._v(" "),n("p",[t._v("Next we will try our hands on creating tasks.")])])}),[],!1,null,null,null);s.default=e.exports}}]);
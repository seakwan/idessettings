Type.registerNamespace('${PROJECT_NAME}#if (${FOLDER_NAME} && $FOLDER_NAME != "" ).${FOLDER_NAME}#end');

${PROJECT_NAME}.#if (${FOLDER_NAME} && $FOLDER_NAME != "" )${FOLDER_NAME}.#end${NAME}Action = function () {
    ${PROJECT_NAME}.#if (${FOLDER_NAME} && $FOLDER_NAME != "" )${FOLDER_NAME}.#end${NAME}Action.initializeBase(this);
};

${PROJECT_NAME}.#if (${FOLDER_NAME} && $FOLDER_NAME != "" )${FOLDER_NAME}. #end${NAME}Action.prototype = {
    context: function (cb) {
        cb();
    },
    initialize: function ${NAME}Action\$initialize() {
        ${PROJECT_NAME}.#if (${FOLDER_NAME} && $FOLDER_NAME != "" )${FOLDER_NAME}.#end${NAME}Action.callBaseMethod(this, 'initialize');
    },

    dispose: function () {
        ${PROJECT_NAME}.#if (${FOLDER_NAME} && $FOLDER_NAME != "" )${FOLDER_NAME}.#end${NAME}Action.callBaseMethod(this, 'dispose');
    }
};
${PROJECT_NAME}.#if (${FOLDER_NAME} && $FOLDER_NAME != "" )${FOLDER_NAME}.#end${NAME}Action.registerClass('${PROJECT_NAME}.#if (${FOLDER_NAME} && $FOLDER_NAME != "" )${FOLDER_NAME}.#end${NAME}Action', Sys.UI.PageAction);
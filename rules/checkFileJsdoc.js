'use strict';

const commentParse = require('comment-parser');

const DEFAULT_COMMENT = `/**
* <DESCRIPTION>
*
* @author <YOUR NAME>
**/

`;

module.exports = {
    meta: {
        type: "problem",
        schema: [],
        fixable: "code",
        messages: {
            commentOptRequired: "check-file-jsdoc rule requires the 'comment' parserOption set to true!",
            missingStartComment: "The file does not start with a block comment!",
            invalidAuthor: "Please enter your name as author.",
            invalidDescription: "Please enter a description into the comment.",
        }
    },
    create: function(context) {
        return {
            Program: function(node) {
                if(!("comments" in node)) {
                    context.report({
                        node: node,
                        messageId: "commentOptRequired",
                    });
                    return;
                }

                let headerComment = null;
                for(const c of node["comments"]) {
                    if(c.type === "Block" && c.start === 0) {
                        headerComment = c;
                        break;
                    }
                }

                if(headerComment === null) {
                    context.report({
                        node: node,
                        messageId: "missingStartComment",
                        fix: function(fixer) {
                           return fixer.insertTextBeforeRange([0, 0], DEFAULT_COMMENT);
                        },
                    });
                    return;
                }

                let data = commentParse("/*" + headerComment.value + "*/")[0];
                let found = { author: false };
                for(const t of data.tags) {
                    if(t.tag in found) {
                        found[t.tag] = true;
                    }

                    if(t.source.indexOf("YOUR NAME") !== -1 || t.name.length === 0) {
                        context.report({
                            loc: {
                                start: { line: headerComment.start + t.line + 1, column: 0 },
                                end: { line: headerComment.start + t.line + 1, column: t.source.length },
                            },
                            messageId: "invalidAuthor",
                        })
                    }
                }

                if(data.description.length === 0 || data.description.indexOf("<DESCRIPTION>") !== -1) {
                    context.report({
                        loc: {
                            start: { line: headerComment.start + data.line + 2, column: 0 },
                            end: { line: headerComment.start + data.line + 2, column: data.description.length },
                        },
                        messageId: "invalidDescription",
                    })
                }
            },
        }
    },
};

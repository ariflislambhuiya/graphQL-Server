const postsResolvers = require('./postsResolver')
const usersResolvers = require('./usersResolver')
const commentsResolvers = require('./comments')


module.exports = {
    Post: {
        likeCount(parent) {
            console.log(parent)
            return parent.likes.length

        },
        commnetCount: parent => parent.comments.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}

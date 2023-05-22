exports.createProduct = (req, res, next) => {
    console.log("request", req.body);
    const title = req.body.title
    // const image = req.body.image
    const body = req.body.body

const result = {
    message: "create product sukses",
    data:{
        post_id:1,
        title: 'judul blok',
        body:" asllamualaikum ukhti",
        created_at: "12/04/2023",
        author:{
            uid :1,
            name :"testing"
        }
    }
}
  };
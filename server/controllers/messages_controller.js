let messages = [];
let id = 0;


//{ id: 0, text: 'hello', time: 'noon'}


module.exports = {
    create: (req, res) => {
        messages.push({ id: id, text: req.body.text, time: req.body.time });
        id++;
        res.status(200).send( messages );
    },

    read: (req, res) => {
        res.status(200).send( messages );
    },


    update: (req, res) => {
       // const { text } = req.body;
      
        const messageIndex = messages.findIndex( message => message.id == req.params.id);
        let message = messages[ messageIndex ];

        messages[ messageIndex ] = {
            id: message.id,
            text: req.body.text || message.text,
            time: message.time
          };
          res.status(200).send( messages );
    },
      


    delete: (req, res) => {
        messageIndex = messages.findIndex( message => message.id = req.params.id );
        messages.splice(messageIndex, 1);
        res.status(200).send( messages )
    }
}

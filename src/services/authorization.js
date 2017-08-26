var data = [
    {
        login: 'test1',
        password: 'test1'
    },
    {
        login: 'test2',
        password: 'test2'
    }
]

export default
{
    authorize: function (login, password) 
    {
        return data.find(o => 
            o.login == login && 
            o.password == password)       
    }
}
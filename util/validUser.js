function validUserData(parma_key, param_expiredate)
{
    // 이게 db 테이블이고, 쿼리로 찾는거로 바뀌어야 할듯
    const user_data = [
        { "user": "mopic1", "key": "test_key1", "expiration_date": "20220615" },
        { "user": "mopic2", "key": "test_key2", "expiration_date": "20210615" },
        { "user": "mopic3", "key": "test_key3", "expiration_date": "20230615" }
    ];

    //이 체크로직이 쿼리로
    const ret = user_data.find(elem =>
    {
        let data_expiredate = +elem.expiration_date;
        return (elem.key == parma_key && data_expiredate > +param_expiredate);
    }, this);

    return ret;
}

exports.validUserData = validUserData;
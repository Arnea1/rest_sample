function validUser(param_user, parma_key)
{
    // response format
    let ret = {
        user:param_user,
        status:"",
        reason:""
    }

    // 이게 db 테이블이고, 쿼리로 찾는거로 바뀌어야 할듯
    const user_data = [
        { "user": "mopic1", "key": "test_key1", "expiration_date": "20220615" },
        { "user": "mopic2", "key": "test_key2", "expiration_date": "20210615" },
        { "user": "mopic3", "key": "test_key3", "expiration_date": "20230615" }
    ];

    // 예시 유효날짜의 current_date_time 은 db 기능 같음.
    // 메서드 호출된 시간 기준으로 유효날짜 체크
    const curr_date = new Date();
    let curr_year = "" + curr_date.getFullYear();
    let curr_month = curr_date.getMonth() + 1;
    let curr_day = curr_date.getDate();

    curr_month = (curr_month < 10) ? "0" + curr_month : "" + curr_month;
    curr_day = (curr_day < 10) ? "0" + curr_day : "" + curr_day;

    const check_date_str = curr_year + curr_month + curr_day;

    //이 체크로직이 쿼리로 되면 될듯
    const valid_data = user_data.find(elem =>
    {
        return (elem.key == parma_key && elem.user == param_user);
    }, this);

    if (valid_data)
    {
        // 키와 유저가 맞는게 있음
        // 유효날짜 체크
        if (valid_data.expiration_date && +valid_data.expiration_date > +check_date_str)
        {
            ret.status = "SUCCESS";
        }
        else
        {
            ret.status = "FAILED";
            ret.reason = "EXPIRED";
        }

    }
    else
    {
        // 키와 유저가 맞는게 없음
        ret.status = "FAILED";
        ret.reason = "INVALID_KEY";
    }

    return ret;
};

function validUser2()
{
    console.log(123)
    throw "error";
};

exports.validUser = validUser;
exports.validUser2 = validUser2;
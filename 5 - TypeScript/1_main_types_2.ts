enum StatusCode {
    SUCCESS = 1,
    IN_PROGRESS = 2,
    BREAK = 3
}

const res = {
    message: 'payment success',
    statuscode: StatusCode.SUCCESS
};

// 1 - success
// 2 - in progress
// 3 - break

// if(res.statuscode === StatusCode.SUCCESS){

// }

enum StatusCode2{
    PUBLISHED,
    DRAFT,
    DELETED
}

async function getFaqs(req:{
    topickId:number,
    status?: StatusCode2
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: StatusCode2
}[]>{
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
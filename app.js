const url = 'https://purpleschool.ru/course/javascript'
const url2 = 'https://purpleschoolru/course/javascript'

const getUrlParts = url => {
    const [protocol, _, host, ...path] = url.split('/');
    if (protocol === 'https:' || protocol === 'http:') {
        if (!host.includes('.')) {
            return;
        }
        console.log(`Протокол: ${protocol.split(':')[0]}`);
        console.log(`Домен: ${host}`);
        console.log(`Путь: /${path.join('/')}`);
    }
}

getUrlParts(url);
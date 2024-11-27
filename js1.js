const queryStiring = window.location.search;
const params = new URLSearchParams(queryStiring);

const price = params.get('price');
const alcohol = params.get('alcohol');
const type = params.get('type');
const smoky = params.get('smoky');

const numstr = price + alcohol + type + smoky;

const whiskydic = {
    "0000": {
        name: "�󰡺Ҹ� 16",
        description: "���� ����Ű�� ��Ʈ��, ������ ���ڿ�, ��ŭ�� ������ ������ ���� ��� �̱� ��Ʈ."
    },
    "0001": {
        name: "�� ���̸ӽ� �׶�콺",
        description: "�ε巯�� ������� �ణ�� �����̽���, ������ ���� ����� ����Ű."
    },
    "0010": {
        name: "�Ƶ庤 10",
        description: "���� ���ݸ��� ����Ű�� ��Ʈ��, ������ ��Ʈ�� ǳ�̰� �ŷ���."
    },
    "0011": {
        name: "���ϵ� ��Ű 101",
        description: "�ٴҶ�� ���ݸ��� �ε巯��� ������ ���ڿ��� ��췯�� ������ ����Ű."
    },
    "0100": {
        name: "�������� ����ĳ��ũ",
        description: "��Ʈ�� ������ ��Ư�� ��ȭ�� �����ִ� ����Ű ����Ű."
    },
    "0101": {
        name: "�۷��׷�Ʈ 12",
        description: "������ ��ŭ�� ������, �ε巴�� ���ñ� ���� ������ �̱� ��Ʈ."
    },
    "0110": {
        name: "Ż����Ŀ 10",
        description: "����Ű�� ���ݸ���� �����, �ε巯�� �ǴϽ��� ���� ���� ���� ����Ű."
    },
    "0111": {
        name: "����Ŀ�� ��ũ",
        description: "�ٴҶ�� ���ݸ��� ������, ���� ���ڿð� �������� ��ȭ."
    },
    "1000": {
        name: "�Ƶ庤 �찡��",
        description: "���� ��Ʈ��� ������ ��ä�ο� ��, ����� �� ����Ű �̱� ��Ʈ."
    },
    "1001": {
        name: "��Ķ�� ����ĳ��ũ 12",
        description: "������� ��޽����� ��Ʈ��, ���� ����Ű�԰� �ε巯�� ��."
    },
    "1010": {
        name: "�󰡺Ҹ� 12",
        description: "��� �̱� ��Ʈ�� ���ݸ��� ����Ű ǳ���� ������ ������."
    },
    "1011": {
        name: "��Ŀ�� ����",
        description: "������ ���ڿ� ���� �ٴҶ�, ���ݸ� ǳ�̰� ��ȭ�� �̷�� ���̿��� ����."
    },
    "1100": {
        name: "����� 15 ��ũ ����",
        description: "���ϰ� ����Ű���� ������ ��ȭ, �ε巴�� ������ �ǴϽ��� �ŷ���."
    },
    "1101": {
        name: "�۷����� ��������",
        description: "�����ƿ� �������� ������, �����ϰ� �ε巯�� �ǴϽ��� ���� �̱� ��Ʈ."
    },
    "1110": {
        name: "ųȣ�� ��Ű�� ����",
        description: "���ݸ��� ��Ʈ�� �Ϻ��� ��ȭ, �ε巯�� �ӿ� �������� ǰ�� ����Ű."
    },
    "1111": {
        name: "��Ķ�� �θ� ��ũ 12",
        description: "�θ� ��ũ ������ ������ �ٴҶ�� ���ݸ���, ��޽����� �̱� ��Ʈ�� ��ǥ��."
    }
};

let recommendation = '��ſ��� ��õ�ϴ� ����Ű�� ';
let explanation = '';

recommendation += whiskydic[numstr]['name'];
explanation += whiskydic[numstr]['description'];

const result = document.getElementById("result");
result.innerHTML = `<p>${recommendation} : ${explanation}</p>`
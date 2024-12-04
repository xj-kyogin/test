document.addEventListener('DOMContentLoaded', function() {
    // 创建光点元素并添加到页面
    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-trail');
    document.body.appendChild(cursorTrail);

    // 鼠标移动时更新光点位置和显示状态
    document.addEventListener('mousemove', (e) => {
        // 更新光点位置
        cursorTrail.style.left = `${e.pageX - 10}px`;
        cursorTrail.style.top = `${e.pageY - 10}px`;

        // 显示光点
        cursorTrail.style.opacity = 1;
        cursorTrail.style.transform = 'scale(1)';

        // 添加一个定时器来隐藏和缩小光点
        setTimeout(() => {
            cursorTrail.style.opacity = 0;
            cursorTrail.style.transform = 'scale(0.5)';
        }, 150); // 根据实际需求调整时间
    });
});


// 验证登录
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 定义预期的用户名和密码
    var expectedUsername = 'yyx';
    var expectedPassword = '318';

    // 检查用户名和密码是否符合预设值
    if (username === expectedUsername && password === expectedPassword) {
        window.location.href = 'html/home.html'; // 成功登录，跳转到主页
    } else {
        showModal('宝宝再好好想想o～～～'); // 使用自定义模态窗口显示错误消息
    }
});





// 获取模态窗口元素
var myModal = document.getElementById('myModal');
var newModal = document.getElementById('newModal');

// 获取关闭按钮
var closeBtn = document.getElementById('closeBtn');
var closeBtn2 = document.getElementById('closeBtn2'); // 获取第二个按钮
var closeIcons = document.getElementsByClassName('close'); // 获取所有关闭图标

// 显示原始模态窗口
function showModal() {
    myModal.style.display = 'block';
}

// 关闭原始模态窗口并显示新模态窗口的函数
function switchModals() {
    myModal.style.display = 'none';  // 隐藏原始模态窗口
    newModal.style.display = 'block'; // 显示新模态窗口
}

// 绑定关闭按钮事件触发第二个窗口
closeBtn.onclick = function() {
    switchModals(); // 调用切换窗口的函数
}

// 第二个模态窗口的关闭按钮，只有点击这个按钮时才关闭窗口
closeBtn2.onclick = function() {
    newModal.style.display = 'none'; // 关闭新模态窗口
}

// 防止第一个和第二个关闭图标关闭窗口
for (let i = 0; i < closeIcons.length; i++) {
    closeIcons[i].onclick = function(event) {
        event.stopPropagation(); // 阻止事件冒泡，不执行关闭操作
    };
}

// 确保点击模态窗口外部不关闭窗口
window.onclick = function(event) {
    if (event.target == myModal || event.target == newModal) {
        event.stopPropagation(); // 仅阻止冒泡，无关闭操作
    }
}

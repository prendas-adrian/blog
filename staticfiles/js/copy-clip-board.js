document.addEventListener('DOMContentLoaded', function () {
    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try { document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(textArea);
    }

    function copyTextToClipboard(text) {
        if (!navigator.clipboard) { fallbackCopyTextToClipboard(text); return Promise.resolve(); }
        return navigator.clipboard.writeText(text);
    }

    document.querySelectorAll('pre > code').forEach(function(code) {
        var pre = code.parentNode;
        // evitar duplicar el botón si ya existe
        if (pre.querySelector('.copy-btn')) return;

        var btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.type = 'button';
        btn.innerText = 'Copy';
        btn.addEventListener('click', function () {
            var text = code.innerText;
            copyTextToClipboard(text).then(function () {
                var original = btn.innerText;
                btn.innerText = 'Copied!';
                setTimeout(function () { btn.innerText = original; }, 1500);
            }).catch(function () {
                var original = btn.innerText;
                btn.innerText = 'Error';
                setTimeout(function () { btn.innerText = original; }, 1500);
            });
        });
        pre.style.position = 'relative';
        pre.insertBefore(btn, pre.firstChild);
    });
});
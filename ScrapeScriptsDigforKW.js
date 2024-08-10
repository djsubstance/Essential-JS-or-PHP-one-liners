

// Assuming 'matchedKeys' and 'kwObject' are already defined as in the previous example
const matchedData = matchedKeys.map(key => {
    const keyword = kwObject.find(kw => key.toLowerCase().includes(kw.toLowerCase()));
    return {
        key,
        keyword,
        charCount: key.length,
        fileLink: '#', // Replace with actual file link if available
    };
});

const iframeContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: white;
            margin: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h3>Matched Keys Information</h3>
    <table>
        <thead>
            <tr>
                <th>Matched Key</th>
                <th>Matched Keyword</th>
                <th>Character Count</th>
                <th>Link to File</th>
            </tr>
        </thead>
        <tbody>
            ${matchedData.map(data => `
            <tr>
                <td>${data.key}</td>
                <td>${data.keyword}</td>
                <td>${data.charCount}</td>
                <td><a href="${data.fileLink}" target="_blank">View File</a></td>
            </tr>`).join('')}
        </tbody>
    </table>
</body>
</html>
`;

// Create and style the iframe
const iframe = document.createElement('iframe');
iframe.style.position = 'fixed';
iframe.style.zIndex = '50';
iframe.style.top = '50%';
iframe.style.left = '50%';
iframe.style.transform = 'translate(-50%, -50%)';
iframe.style.width = '80%';
iframe.style.height = '50%';
iframe.style.border = '1px solid #000';
iframe.style.backgroundColor = '#fff';

// Inject the content into the iframe
document.body.appendChild(iframe);
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(iframeContent);
iframe.contentWindow.document.close();


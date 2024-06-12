<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>File Browser</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body, html {
            height: 100%;
            margin: 0;
            background: #121212;
            color: #ffffff;
            font-family: Arial, sans-serif;
        }

        .container {
            width: 80%;
            background: #f0f0f0;
            color: #000000;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-top: 20px;
        }

        .file-item {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            text-align: center;
            background: #ffffff;
            transition: background 0.3s ease;
        }

        .file-item:hover {
            background: #e0e0e0;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="text-center">File Browser</h1>
        <div class="row">
            <?php
            $dir = __DIR__;
            $files = scandir($dir);
            foreach ($files as $file) {
                if ($file !== '.' && $file !== '..' && is_file($file)) {
                    echo "<div class='col-12 col-md-4 mb-3'><div class='file-item'><a href='#' onclick='openFile(\"$file\")'>$file</a></div></div>";
                }
            }
            ?>
        </div>
    </div>
    <script>
        function openFile(fileName) {
            const url = `${window.location.href.replace(/\/[^\/]*$/, '/')}${fileName}`;
            window.open(url, '_blank');
        }
    </script>
    <!-- Bootstrap JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>

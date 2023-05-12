<?php
class Db
{
    public function getDb()
    {
        $config = Config::getInstance();
        return new Database($config->get('db_name'),$config->get('db_user'), $config->get('db_pass'))
    }
}
?>